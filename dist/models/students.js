export const studentsModel = `
CREATE TABLE IF NOT EXISTS students(
  studentId INTEGER NOT NULL,
  gender VARCHAR(1) NOT NULL,
  level INTEGER NOT NULL,
  academicYear VARCHAR(10) NOT NULL,
  durationOfProgramme INTEGER NOT NULL,
  facultyOrProgramme VARCHAR(255) NOT NULL,
  department VARCHAR(255),
  addressHallOfResidence TEXT NOT NULL,
  phoneNumber VARCHAR(11) NOT NULL,
  isCollegeStudent INTEGER NOT NULL,
  isPostGraduate INTEGER NOT NULL,
  isCleared INTEGER NOT NULL,
  createdAt DATETIME DEFAULT (datetime('now', 'localtime')) NOT NULL,
  membershipFeePaidAt DATETIME DEFAULT (datetime('now', 'localtime')),
  membershipExpiresOn DATETIME DEFAULT (datetime('now', 'localtime')),
  userId INTEGER NOT NULL,
  FOREIGN KEY(userId) REFERENCES users(userId)
);
`;
