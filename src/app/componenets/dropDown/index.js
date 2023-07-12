"use client"
import { Dropdown, red } from "@nextui-org/react";
import './drop.css'

export default function DropD({feature, item1,item2,item3}) {
  return (
    <Dropdown className="custom_drop_style">
      <Dropdown.Button  flat className="">{feature}</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">{item1}</Dropdown.Item>
        <Dropdown.Item key="copy">{item2}</Dropdown.Item>
        <Dropdown.Item key="edit">{item3}</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
  );
}
