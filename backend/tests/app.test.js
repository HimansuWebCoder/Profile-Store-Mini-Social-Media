const fs = require("fs");
const path = require("path");
const request = require("supertest");
const app = require("../src/app"); // Import the app

describe("File Upload API Tests", () => {
	describe("POST /api/upload", () => {
		it("should upload a file successfully and return status 201", async () => {
			const filePath = path.join(__dirname, "../uploads/testfile.txt");
			fs.writeFileSync(filePath, "this is a test file.");

			const response = await request(app)
				.post("/api/upload")
				.attach("avatar", filePath);

			expect(response.status).toBe(201);
			expect(response.body.message).toBe("file uploaded successfully");
			expect(response.body.filename).toBe("testfile.txt");

			fs.unlinkSync(filePath);
		});

		it("should return an error if no file attached, status 400", async () => {
			const response = await request(app).post("/api/upload");
			expect(response.status).toBe(400);
			expect(response.body.message).toBe("no file uploaded");
		});
	});
});

// describe("File Upload API Tests", () => {
// 	// Test the file upload
// 	describe("POST /api/upload", () => {
// 		it("should upload a file successfully and return status 201", async () => {
// 			const filePath = path.join(__dirname, "../uploads/testfile.txt");

// 			// Create a temporary test file
// 			fs.writeFileSync(filePath, "This is a test file.");

// 			const response = await request(app)
// 				.post("/api/upload")
// 				.attach("file", filePath);

// 			expect(response.status).toBe(201);
// 			expect(response.body.message).toBe("File uploaded successfully");
// 			expect(response.body.filename).toBe("testfile.txt");

// 			// Cleanup: delete the uploaded file
// 			fs.unlinkSync(filePath);
// 		});

// 		it("should return an error if no file is attached, status 400", async () => {
// 			const response = await request(app).post("/api/upload");
// 			expect(response.status).toBe(400);
// 			expect(response.body.message).toBe("No file uploaded");
// 		});
// 	});
// });
