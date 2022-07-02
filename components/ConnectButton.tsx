type ConnectButtonProps = {
  onConnect: () => Promise<void>
}

const ConnectButton = ({ onConnect }: ConnectButtonProps): JSX.Element => {
  return (
    <button
      onClick={onConnect}
      className="rounded-[10px] border border-l-30 bg-[#B444F9] text-white p-2 hover:text-white hover:bg-l-400 hover:border-l-400 hover:fill-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-n-100 focus-visible:outline-none active:bg-l-500 active:border-l-500 active:text-l-100 active:ring-0"
    >
      <div className="flex items-center justify-center text-xs font-semibold px-4 py-1  text-[32px]">
        Connect Wallet
      </div>
    </button>
  )
}

export default ConnectButton