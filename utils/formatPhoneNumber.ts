export const formatPhoneNumber = (value: string): string => {
  if (!value) return value;

  // 1. Get only digits from the input value
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  // 2. Format based on the number of digits
  if (phoneNumberLength < 4) {
    return phoneNumber;
  }
  
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  
  // 3. Return the fully formatted number, slicing to a max of 10 digits
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};
