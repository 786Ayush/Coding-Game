export const language = [
  {
    id: 45,
    name: "Assembly (NASM 2.14.02)",
  },
  {
    id: 46,
    name: "Bash (5.0.0)",
  },
  {
    id: 47,
    name: "Basic (FBC 1.07.1)",
  },
  {
    id: 48,
    name: "C (GCC 7.4.0)",
  },
  {
    id: 52,
    name: "C++ (GCC 7.4.0)",
  },
  {
    id: 49,
    name: "C (GCC 8.3.0)",
  },
  {
    id: 53,
    name: "C++ (GCC 8.3.0)",
  },
  {
    id: 50,
    name: "C (GCC 9.2.0)",
  },
  {
    id: 54,
    name: "C++ (GCC 9.2.0)",
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
  },
  {
    id: 55,
    name: "Common Lisp (SBCL 2.0.0)",
  },
  {
    id: 56,
    name: "D (DMD 2.089.1)",
  },
  {
    id: 57,
    name: "Elixir (1.9.4)",
  },
  {
    id: 58,
    name: "Erlang (OTP 22.2)",
  },
  {
    id: 44,
    name: "Executable",
  },
  {
    id: 59,
    name: "Fortran (GFortran 9.2.0)",
  },
  {
    id: 60,
    name: "Go (1.13.5)",
  },
  {
    id: 61,
    name: "Haskell (GHC 8.8.1)",
  },
  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
  },
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
  },
  {
    id: 64,
    name: "Lua (5.3.5)",
  },
  {
    id: 65,
    name: "OCaml (4.09.0)",
  },
  {
    id: 66,
    name: "Octave (5.1.0)",
  },
  {
    id: 67,
    name: "Pascal (FPC 3.0.4)",
  },
  {
    id: 68,
    name: "PHP (7.4.1)",
  },
  {
    id: 43,
    name: "Plain Text",
  },
  {
    id: 69,
    name: "Prolog (GNU Prolog 1.4.5)",
  },
  {
    id: 70,
    name: "Python (2.7.17)",
  },
  {
    id: 71,
    name: "Python (3.8.1)",
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
  },
  {
    id: 73,
    name: "Rust (1.40.0)",
  },
  {
    id: 74,
    name: "TypeScript (3.7.4)",
  },
];

export const Question = [
  {
    id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    difficulty: "Easy",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    tags: ["Array", "Hash Table"],
  },
  {
    id: 2,
    title: "Reverse Linked List",
    description:
      "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    difficulty: "Easy",
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
    ],
    constraints: [
      "The number of nodes in the list is the range [0, 5000]",
      "-5000 <= Node.val <= 5000",
    ],
    tags: ["Linked List", "Recursion"],
  },
  {
    id: 3,
    title: "Valid Parentheses",
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    difficulty: "Easy",
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'",
    ],
    tags: ["String", "Stack"],
  },
  {
    id: 4,
    title: "Merge Two Sorted Lists",
    description:
      "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list.",
    difficulty: "Easy",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 <= Node.val <= 100",
    ],
    tags: ["Linked List", "Recursion"],
  },
  {
    id: 5,
    title: "Best Time to Buy and Sell Stock",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit.",
    difficulty: "Easy",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No profit can be made since prices are declining.",
      },
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    tags: ["Array", "Dynamic Programming"],
  },
];
