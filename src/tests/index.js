import React from 'react'
import Adapter from 'enzyme-adapter-react-16.1'
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Calendar from '../index'
//import Button from '../index'
import { expect } from 'chai'
import sinon from 'sinon'
const { describe, it } = global

Enzyme.configure({ adapter: new Adapter() });

/*
describe('Button', () => {
  it('should show the given text', () => {
    const text = 'The Text'
    const wrapper = shallow(<Button>{text}</Button>)
    expect(wrapper.text()).to.be.equal(text)
  })

  it('should handle the click event', () => {
    const clickMe = sinon.stub()
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    const wrapper = mount(
      <div>
        <Button onClick={clickMe}>ClickMe</Button>
      </div>
    )

    wrapper.find('button').simulate('click')
    expect(clickMe.callCount).to.be.equal(1)
  })
})
*/

describe('Calendar', () => {
  it('should trigger an onChange event with the correct date when a form is submitted', () => {
    let date
    const onChange = (newDate) => {
      date = newDate
    }
    const initialDate = '01-01-2018'
    const newDate = '02-02-2018'
    const wrapper = mount(
      <div>
        <form>
          <Calendar
            date={initialDate}
            onChange={onChange}
          />
        </form>
      </div>
      )
    const input = wrapper.find('input')
    //input.instance().value = newDate
    console.log(' >> simulate change ')
    input.simulate('change', { target: { value: newDate } } )
    //console.log(' >> simulate blur ')
    //input.simulate('blur')
    wrapper.find('form').simulate('submit')
    expect(date).to.be.equal(newDate)
  })
})
