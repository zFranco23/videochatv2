"use client";

export const requestMediaAudio = async () => {
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
  } catch (err) {
    console.error(err);
  }
};
