import { ChangeEvent } from "react";
import { FormValues } from "../screens/traffic-ticket/interfaces/ticket.interface";

export const adaptHandleChange = (handleChange: (e: ChangeEvent<any>) => void) => 
    (field: keyof FormValues) => 
      (value: string) => {
        handleChange({
          target: {
            name: field,
            value: value
          }
        } as ChangeEvent<any>);
      };
  
 export const adaptHandleBlur = (handleBlur: (e: ChangeEvent<any>) => void) => 
    (field: keyof FormValues) => 
      () => {
        handleBlur({
          target: {
            name: field
          }
        } as ChangeEvent<any>);
      };