export function generateWord(): string {
  const random = Math.floor(Math.random() * 5);

  switch (random) {
    case 0:
      return "beep";
    case 1:
      return "boop";
    case 2:
      return "foo";
    case 3:
      return "bar";
    case 4:
      return "biz";
    case 5:
      return "bang";
  }
}
