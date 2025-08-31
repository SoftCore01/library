export const otherModel = `
CREATE TABLE IF NOT EXISTS other(
  otherId INTEGER PRIMARY KEY AUTOINCREMENT,
  gender VARCHAR(1) NOT NULL,
  address TEXT NOT NULL,
  phoneNumber VARCHAR(11) NOT NULL,
  createdAt DATETIME DEFAULT (datetime('now', 'localtime')) NOT NULL,
  membershipFeePaidAt DATETIME DEFAULT (datetime('now', 'localtime')),
  membershipExpiresOn DATETIME DEFAULT (datetime('now', 'localtime')),
  userId INTEGER NOT NULL,
  FOREIGN KEY(userId) REFERENCES users(userId)
);
`;