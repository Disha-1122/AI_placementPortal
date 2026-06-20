from fastapi import APIRouter
from models.user import User, LoginUser
from database.db import users_collection
from passlib.hash import bcrypt
import random

router = APIRouter()

otp_storage = {}


@router.post("/register")
def register(user: User):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        return {
            "message": "Email already exists"
        }

    hashed_password = bcrypt.hash(user.password)

    user_data = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    }

    users_collection.insert_one(user_data)

    return {
        "message": "User Registered Successfully"
    }


@router.post("/login")
def login(user: LoginUser):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if not existing_user:
        return {
            "message": "User not found"
        }

    stored_password = existing_user["password"]

    if bcrypt.verify(
        user.password,
        stored_password
    ):
        return {
            "message": "Login Successful",
            "name": existing_user["name"],
            "email": existing_user["email"]
        }

    return {
        "message": "Invalid Password"
    }

@router.post("/send-otp")
def send_otp(data: dict):

    email = data.get("email")

    user = users_collection.find_one(
        {"email": email}
    )

    if not user:
        return {
            "message": "Email not registered"
        }

    otp = str(random.randint(100000, 999999))

    otp_storage[email] = otp

    print(f"OTP for {email}: {otp}")

    return {
        "message": "OTP sent successfully"
    }

@router.post("/verify-otp")
def verify_otp(data: dict):

    email = data.get("email")
    otp = data.get("otp")

    if otp_storage.get(email) == otp:
        return {
            "message": "OTP verified"
        }

    return {
        "message": "Invalid OTP"
    }

@router.post("/reset-password")
def reset_password(data: dict):

    email = data.get("email")
    new_password = data.get("new_password")

    hashed_password = bcrypt.hash(
        new_password
    )

    users_collection.update_one(
        {"email": email},
        {
            "$set": {
                "password": hashed_password
            }
        }
    )

    otp_storage.pop(email, None)

    return {
        "message": "Password updated successfully"
    }