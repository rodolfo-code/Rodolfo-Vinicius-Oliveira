interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

// We could eliminate this interface because it is used in a function that isn't needed, i keep it only give an example how to solve the repeat problem
interface FormattedWalletBalance extends Omit<WalletBalance, "blockchain"> {
  formatted: string;
}

interface Props extends BoxProps {}

const useWalletBalances = (): WalletBalance[] => {
  return [];
};
// function external
const usePrices = () => {
  //handle
  return;
};

const getPriority = (blockchain: string): number => {
  switch (blockchain) {
    case "Osmosis":
      return 100;
    case "Ethereum":
      return 50;
    case "Arbitrum":
      return 30;
    case "Zilliqa":
      return 20;
    case "Neo":
      return 20;
    default:
      return -99;
  }
};

const MIN_PRIORITY = -99;

const filterByPriorityAndAmount = (balance: WalletBalance) => {
  const balancePriority = getPriority(balance.blockchain);

  return balancePriority > MIN_PRIORITY && balance.amount > 0;
};

const sortBalances = (lhs: WalletBalance, rhs: WalletBalance) => {
  const leftPriority = getPriority(lhs.blockchain);
  const rightPriority = getPriority(rhs.blockchain);

  return leftPriority > rightPriority ? -1 : 1;
};

const WalletPage: React.FC<Props> = (props: Props) => {
  const { ...rest } = props;
  const balances: WalletBalance[] = useWalletBalances();
  const prices = usePrices();

  const sortedBalances = useMemo(() => {
    return balances.filter(filterByPriorityAndAmount).sort(sortBalances);
  }, [balances]);

  const rows = sortedBalances.map((balance: WalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    const formattedBalance = balance.amount.toFixed(2);

    const walletRowProps = {
      key: `${balance.currency}-${index}`,
      amount: balance.amount,
      usdValue: usdValue,
      formattedAmount: formattedBalance,
    };

    return <WalletRow className={classes.row} {...walletRowProps} />;
  });

  return <div {...rest}>{rows}</div>;
};
