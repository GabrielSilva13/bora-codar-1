const Spinner = (props: { spinnerSize?: string }) => {
  return (
    <div>
      <div className="box-border inline-block animate-spinner">
        <div
          className="overflow-hidden"
          style={{
            width: props.spinnerSize,
            height: `calc(${props.spinnerSize} / 2)`,
          }}
        >
          <div
            className="rotate-45 rounded-[50%] w-full h-[200%] animate-circle-1"
            style={{
              border: `calc(${props.spinnerSize} / 8) solid #0a86fb`,
              borderRight: `calc(${props.spinnerSize} / 8) solid transparent`,
              borderBottom: `calc(${props.spinnerSize} / 8) solid transparent`,
            }}
          />
        </div>
        <div
          className="overflow-hidden"
          style={{
            width: props.spinnerSize,
            height: `calc(${props.spinnerSize} / 2)`,
          }}
        >
          <div className="animate-circle-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
