import { TSVersion } from "./versioned/ts4_7";

{
  function expect<T>(t: T) {}

  expect<TSVersion.DigitLT<1, 2>>(true);
  expect<TSVersion.DigitLT<2, 2>>(false);
  expect<TSVersion.DigitLT<3, 2>>(false);

  expect<TSVersion.DigitLT<1, 3>>(true);
  expect<TSVersion.DigitLT<3, 3>>(false);
  expect<TSVersion.DigitLT<5, 3>>(false);

  type Version = `${TSVersion.Major}.${TSVersion.Minor}`;
  expect<Version>("4.7");

  expect<TSVersion.AtLeast<3, 9>>(true);
  expect<TSVersion.AtLeast<4, 5>>(true);
  expect<TSVersion.AtLeast<4, 6>>(true);
  expect<TSVersion.AtLeast<4, 7>>(true);
  // @ts-expect-error
  expect<TSVersion.AtLeast<4, 8>>(true);
  // @ts-expect-error
  expect<TSVersion.AtLeast<5, 0>>(true);

  type VersionDependentType = TSVersion.AtLeast<3, 1> extends true
    ? //    ^?
      "we're in the future!"
    : "it's the stone age!";
}
