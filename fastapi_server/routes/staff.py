from fastapi import APIRouter
from models import Staff
from database import student_collection
staff_router=APIRouter(prefix="/staff",tags=["staff"])
@staff_router.get("/getstaffs")
def getStaffs():
    return "get staff method called"
@staff_router.post("/addstaffs")
def addstaff():
    return "add staff method called"