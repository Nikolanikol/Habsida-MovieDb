export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer); // Сбрасываем предыдущий таймер
    timer = setTimeout(() => {
      func(...args); // Вызываем функцию с задержкой
    }, delay);
  };
}
