
import { createAction } from "typesafe-actions";
import { IInputProduct } from "./reducer";


export const infoProductDilog = createAction("INFO_PRODUCT/INFO_PRODUCT_DILOG")<IInputProduct[]>();
