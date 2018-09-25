import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddressCard from '../components/addressCard';

configure({ adapter: new Adapter() });

//const AddressCard = ({ location, address, contact, open, ...rest }) => {
describe("addressCard.jsx", () => {

    const props = {
        key: 1,
        location: "Halifax",
        address: {
            name: "Covéa Insurance",
            premise: "A & B Mills", 
            street: "Dean Clough",
            city: "Halifax", 
            postcode: "HX3 5AX"
        },
        contact: {
            telephone: "01422 331166",
            email: ""
        },
        open: "09:00 - 17:00, Mon - Fri"
    };

    it("AddressCard not to be null", () => {
        //arrange
        const wrapper = shallow(
            <AddressCard  
                location={props.location}
                address={props.address}
                contact={props.contact}
                open={props.open}
            />
        );
    
        //act
        const instance = wrapper.instance();

        //assert
        expect(instance).not.toBe(null)
    });

    it("AddressCard to contain props", () => {
        //arrange
        const wrapper = shallow(
            <AddressCard  
                location={props.location}
                address={props.address}
                contact={props.contact}
                open={props.open}
            />
        );

        //act
        const instanceProps = wrapper.instance().props;
        
        //assert
        expect(instanceProps).not.toBe(null);
    });

    it("AddressCard to contain location prop", () => {
        //arrange
        const wrapper = shallow(
            <AddressCard  
                location={props.location}
                address={props.address}
                contact={props.contact}
                open={props.open}
            />
        );
        
        const expectedLocation = props.location;

        //act
        const instanceProps = wrapper.instance().props;
        const actuallocation = instanceProps.location;
        
        //assert
        expect(actuallocation).toEqual(expectedLocation);
    });

    it("AddressCard to contain address prop", () => {
        //arrange
        const wrapper = shallow(
            <AddressCard  
                location={props.location}
                address={props.address}
                contact={props.contact}
                open={props.open}
            />
        );
     
        const expectedAddress = props.address;

        //act
        const instanceProps = wrapper.instance().props;
        const actualAddress = instanceProps.address;
        
        //assert
        expect(actualAddress).toEqual(expectedAddress);
    });

    it("AddressCard to contain contact prop", () => {
        //arrange
        const wrapper = shallow(
            <AddressCard  
                location={props.location}
                address={props.address}
                contact={props.contact}
                open={props.open}
            />
        );
     
        const expectedContact = props.contact;

        //act
        const instanceProps = wrapper.instance().props;
        const actualContact = instanceProps.contact;
        
        //assert
        expect(actualContact).toEqual(expectedContact);
    });

    it("AddressCard to contain open prop", () => {
        //arrange
        const wrapper = shallow(
            <AddressCard  
                location={props.location}
                address={props.address}
                contact={props.contact}
                open={props.open}
            />
        );
     
        const expectedOpen = props.open;

        //act
        const instanceProps = wrapper.instance().props;
        const actualOpen = instanceProps.open;
        
        //assert
        expect(actualOpen).toEqual(expectedOpen);
    });
});