export namespace TSVersion {
  type Digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  type Digit = Digits[number];

  export type DigitLT<
    A extends Digit,
    B extends Digit,
    ShiftedNumbers = Digits
  > = ShiftedNumbers extends [infer Head, ...infer Tail]
    ? B extends Head
      ? false
      : A extends Head
      ? true
      : DigitLT<A, B, Tail>
    : never;

  export type DigitEQ<A extends Digit, B extends Digit> = A extends B
    ? true
    : false;

  export type DigitLTE<A extends Digit, B extends Digit> = DigitEQ<
    A,
    B
  > extends true
    ? true
    : DigitLT<A, B>;

  type PossibleMajors = 3 | 4 | 5 | 6 | 7 | 8 | 9;
  type PossibleMinors = Digit;

  export type Major = 4;
  export type Minor = 7;

  export type AtLeast<
    Major extends PossibleMajors,
    Minor extends PossibleMinors
  > = DigitLT<Major, TSVersion.Major> extends true
    ? true
    : DigitEQ<Major, TSVersion.Major> extends true
    ? DigitLTE<Minor, TSVersion.Minor>
    : false;
}
