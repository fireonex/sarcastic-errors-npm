const sarcasticMessages = [
    "Oh great! Of course, this was supposed to happen. The error we all deserved.",
    "Well, isn't this just perfect? Error 404, but don't worry, you're still awesome.",
    "Ah, yes. Everything is going according to plan... oh wait, no. Error. Who could have guessed?",
    "No big deal! You were just trying to do something important... and here comes the error.",
    "An error? You're just beginning your journey to become the master of errors. Keep going!",
    "Problems? We don't have problems, this is just the universe teaching us patience.",
    "Oh, look! Another bug! How surprising. Maybe you'll find the fix, or maybe not.",
    "Error? Nah, it's just the system telling you that you should take a break. Clearly, you deserve it.",
    "Well, that's just fantastic. I mean, who doesn't love an unexpected crash in the middle of the night?",
    "Oh, a crash. What a shocker! Just when everything seemed to be working perfectly, right?",
    "Did you really think it would work? Come on, we're not in a fairytale.",
    "An error? What a unique and totally unpredictable occurrence. Well done!",
    "Well, this is awkward. Looks like you just broke the unbreakable.",
    "Congratulations! You've unlocked the 'Error Master' achievement.",
    "Guess what? The code didn't work. I know, big surprise.",
    "Error? Oh, please. This is just the software's way of saying, 'I need a break, too.'",
    "Well, this is just perfect timing, isn't it? The universe knew you needed this error right now.",
    "Another bug, you say? Nah, just a feature in disguise. Keep up the great work!",
    "Ah, the sweet sound of failure. It's music to my ears.",
    "Looks like someone didn't read the documentation. Oh well, errors are part of life.",
    "Everything was going so well... Until it wasn't. Enjoy the error, it's your new best friend.",
    "Congratulations, you've just discovered a new way to break everything. Impressive.",
    "Don't worry, this is just a sign that you're getting closer to the solution. Or not."
];
export const throwError = (message) => {
    const randomMessage = sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)];
    console.error(`[ERROR] ${message}: ${randomMessage}`);
};
//# sourceMappingURL=index.js.map