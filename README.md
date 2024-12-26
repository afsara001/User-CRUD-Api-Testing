# User-CRUD-Api-Testing
This project demonstrates a simple RESTful API for performing CRUD (Create, Read, Update, Delete) operations on user data. Additionally, it includes steps to test the API using Postman and generate a Newman HTML report.

# Features
- Create a new user
- Retrieve users by name or ID
- Update existing user information
- Delete a user
- Automated testing with Postman and Newman
- Generate detailed HTML reports using Newman reporters
# Technologies Used
-Node.js: For backend development.
-Express.js: To build the RESTful API.
-Postman: For API testing.
-Newman: To run Postman collections from the command line and generate reports.

# 1. Prerequisites
Make sure you have the following installed:
- Node.js (v14 or above)
- Postman
- Newman
- Newman HTMLExtra Reporter
# 2. Installation
# 3. Testing the API
# Using Postman
- Import the User_CRUD_API.postman_collection.json file into Postman.
- Use the endpoints to test the API functionalities.
- Add test scripts under the Tests tab for each request.
# Using Newman
- Install Newman globally 
- Run the Postman collection
# 4. Generate an HTML report:

- newman run UserCRUDAPI.postman_collection.json -r htmlextra --reporter-htmlextra-export ./newman-report.html
- Open the generated report: Navigate to the directory where the newman-report.html is generated and open it in a browser to view a detailed report.

# 5. Screenshots
- Postman API Testing
- Newman HTML Report
![Screenshot 2024-12-26 120408](https://github.com/user-attachments/assets/d5ce9348-c07e-40e8-95ca-14cf93e01b54)
![Screenshot 2024-12-26 120316](https://github.com/user-attachments/assets/98cdf1bf-abc1-45b6-8caa-e3a8f12739d5)
![Screenshot 2024-12-26 120302](https://github.com/user-attachments/assets/b104f2c7-1fa6-47e5-b79d-248c6dcacf3e)
![Screenshot 2024-12-26 115537](https://github.com/user-attachments/assets/b146ebec-becc-4884-83c0-b9f395372b2d)
