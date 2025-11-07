import SvgPencil from './svg/SvgPencil'
import Button from './html/Button'
import SvgClose from './svg/SvgClose'
import CheckBox from './html/CheckBox'

const TodoListItemEmpty = () => {
  return (
    <>
      <li className="todo__item todo__item--empty">
        <p className=" todo__text--empty">There are no registerd tasks</p>
      </li>
      <li className="todo__item todo__item--complete">
        <CheckBox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked
        >
          Eat Breakfast
        </CheckBox>
        {/* <div className="todo__checkbox-group">
            <input type="checkbox" className="todo__checkbox" checked />
            <label>Eat Breakfast</label>
          </div> */}
        {/* 할 일을 수정할 때만 노출 */}
        {/* <input type="text" className="todo__modify-input" /> */}
        <div className="todo__button-group">
          <Button>
            <SvgPencil />
          </Button>
          <Button className="todo__action-Button">
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  )
}
export default TodoListItemEmpty
