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

  expect<TSVersion.AtLeast<3, 9>>(false);
  expect<TSVersion.AtLeast<4, 6>>(false);
  expect<TSVersion.AtLeast<4, 7>>(true);
  expect<TSVersion.AtLeast<4, 8>>(true);
  expect<TSVersion.AtLeast<5, 0>>(true);
}
