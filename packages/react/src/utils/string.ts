// Get avatar letter by words
export const getAvatarLetter = (words?: string): string => {
  if (!words) {
    return '';
  }

  const letters = words.split(' ').map((letter) => letter[0]);

  return letters.join('').toUpperCase();
};

// Get username from email
export const getUsernameFromEmail = (email?: string | null): string => {
  if (!email) {
    return '';
  }

  const [username] = email.split('@');

  return username;
};
