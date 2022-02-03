function Tombol(props) {
  const semuaTombol = props.semuaTombol.map((tombol, index) => {
    let handleClick;
    let classNameElement = 'tombol ';
    if (tombol === "C") {
      handleClick = () => {
        props.setValue('')
      }
      classNameElement += 'operator'
    } else if (tombol === "DEL") {
      handleClick = () => {
        props.setValue(props.value.slice(0, -1));
      }
      classNameElement += 'operator';
    } else if (tombol === "=") {
      handleClick = () => {
        props.setValue(eval(props.value));
      }
      classNameElement += 'samadengan'
    } else {
      handleClick = () => {
        props.setValue(props.value + tombol);
      }
      classNameElement += '';

      if (tombol === '0') {
        classNameElement += 'nol'
      }

      const operator = ['.','/','*','+','-']
      operator.forEach((e) => {
        if (e === tombol) {
          classNameElement += 'operator'
        }
      });
    }

    return <span className={classNameElement} onClick={handleClick} key={index}>{tombol}</span>
  })

  return (
    <div className="container-tombol">
      {semuaTombol}
    </div>
  );
}

export default Tombol;