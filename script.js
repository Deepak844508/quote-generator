// Array of leadership thoughts
const leadershipThoughts = [
    " ~ Leadership is not about being in charge. It is about taking care of those in your charge.",
    "~ The best leaders are those who empower others.",
    "~ Leadership is not about being the best. It's about making everyone else better.",
    "~ A leader's attitude is like a mirror; it reflects the attitudes of the team.",
    "~ Leadership is about making difficult decisions for the greater good.",
    "~ The mark of a great leader is their ability to bring out the best in others.",
    "~ Leadership is not about titles; it's about actions and impact.",
    "~ Effective leaders listen more than they speak.",
    "~ Leadership is not about popularity; it's about responsibility.",
    "~ True leaders lead by example, not by command."
  ];
  
  // This code will run when the page loads
  window.onload = function() {
    // Get the element that will display the leadership thought
    const leadershipThoughtElement = document.getElementById("leadership-thought");
  
    // Generate a random index to select a thought from the array
    const randomIndex = Math.floor(Math.random() * leadershipThoughts.length);
  
    // Set the text content of the element to a randomly selected thought
    leadershipThoughtElement.textContent = leadershipThoughts[randomIndex];
  };
  
  