import React from "react";

export default function SIP() {
  return (
    <>
      {" "}
      <div>SIP</div>
      {
        class ManageEmployee {
          constructor(http) {
            this.http = http;
            this.SERVER_URL = "http://localhost:5000/employee";
          }

          getEmployee(empId) {
            return this.http.get(this.SERVER_URL + `/${empId}`);
          }

          updateEmployee(employee) {
            return this.http.put(this.SERVER_URL + `/${employee.id}`, employee);
          }

          deleteEmployee(empId) {
            return this.http.delete(this.SERVER_URL + `/${empId}`);
          }

          calculateEmployeeSalary(empId, workingHours) {
            var employee = this.http.get(this.SERVER_URL + `/${empId}`);
            return employee.rate * workingHours;
          }
        }
      }
    </>
  );
}
