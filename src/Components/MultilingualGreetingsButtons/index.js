import './index.css'

const MultilingualGreetingsButtons = props => {
  const {eachList, condition, buttonActive} = props
  const activeButtonStyle = condition ? 'active-button' : null
  const onButton = () => {
    buttonActive(eachList.id)
  }
  return (
    <li>
      <button
        type="button"
        className={`button-item ${activeButtonStyle}`}
        onClick={onButton}
      >
        {eachList.buttonText}
      </button>
    </li>
  )
}

export default MultilingualGreetingsButtons
