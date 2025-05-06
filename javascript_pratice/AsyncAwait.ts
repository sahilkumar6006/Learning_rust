// Define types for our data
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// Function to fetch user data
function fetchUser(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      if (userId > 0) {
        // Successful response
        resolve({
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`
        });
      } else {
        // Error handling
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
}

// Function to fetch posts for a user
function fetchPosts(userId: number): Promise<Post[]> {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      if (userId > 0) {
        // Generate some posts for this user
        const posts: Post[] = [
          {
            id: 1,
            userId: userId,
            title: `Post 1 by User ${userId}`,
            body: "This is the first post content"
          },
          {
            id: 2,
            userId: userId,
            title: `Post 2 by User ${userId}`,
            body: "This is the second post content"
          }
        ];
        resolve(posts);
      } else {
        reject(new Error("Cannot fetch posts for invalid user ID"));
      }
    }, 1500);
  });
}

// Function that combines both operations using async/await
async function getUserWithPosts(userId: number) {
  try {
    console.log(`Fetching user ${userId}...`);
    const user = await fetchUser(userId);
    console.log(`User found: ${user.name}`);
    
    console.log(`Fetching posts for ${user.name}...`);
    const posts = await fetchPosts(user.id);
    console.log(`Found ${posts.length} posts`);
    
    return {
      user,
      posts
    };
  } catch (error) {
    console.error("Error in getUserWithPosts:", error);
    throw error; // Re-throw to allow calling code to handle it
  }
}

// Usage example
console.log("Starting data fetch process...");

getUserWithPosts(1)
  .then(result => {
    console.log("Final result:", result);
  })
  .catch(error => {
    console.error("Operation failed:", error);
  })
  .finally(() => {
    console.log("Operation complete");
  });

console.log("Data fetch initiated - this runs immediately while fetching happens in background");