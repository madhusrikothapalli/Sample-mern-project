from fastapi import APIRouter
student_router=APIRouter(prefix="/student",tags=["student"])
@student_router.get("/getstudents")
def getStudents():
    return "get student method called"
@student_router.post("/addstudents")
def addstudents():
    return "add student method called"