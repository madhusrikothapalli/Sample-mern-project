from fastapi import FastAPI
from models import Student,Staff
from database import student_collection,staff_collection
app=FastAPI()
def student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "emai":Student["email"], 
        "age":Student["age"],
        "marks":Student["marks"],
    }
# localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    students=student_collection.find()
    return[student_details(student)for student in students]
# where Student is class name
@app.post("/register")
def register(stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    return {"message":"data inserted sucess"}
@app.put("/updateprofile")
def updateprofile():
    return "update profile called"
@app.delete("/deleteprofile")
def delete():
    return "delete profile called"
@app.get("/getStudentDet/{userid}")
def getStudentDet(userid:int):
    return {"user_id":userid}

@app.get("/getStudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit}