import {
  CREATE_CATEGORY,
  ALL_CATEGORIES,
  UPDATE_CATEGORY,
  REMOVE_CATEGORY,
  REMOVE_ALL_CATEGORY

} from "./type";

import CategoryService from "../services/categoryService";

export const createCategory = (object) => async (dispatch) => {

  try {

    const res = await CategoryService.create(object);
    dispatch({
      type: CREATE_CATEGORY,
      payload: res.data,
    });
    return Promise.resolve(res.data);

  } catch (err) {

    return Promise.reject(err);

  }
};

export const allCategories = () => async (dispatch) => {

  try {

    const res = await CategoryService.findAll();
     dispatch({
       type: ALL_CATEGORIES,
       payload: res.data,
     });
     return Promise.resolve(res.data);
  } catch (err) {

    return Promise.reject(err);

  }
};

export const update = (id, object) => async (dispatch) => {

  try {

    const res = await CategoryService.update(id, object);

    return Promise.resolve(res.data);

  } catch (err) {

    return Promise.reject(err);

  }
};

export const remove = (id) => async (dispatch) => {

  try {

    await CategoryService.remove(id);
    dispatch({
      type: REMOVE_CATEGORY,
      payload: { id },
    });

  } catch (err) {

    console.log(err);

  }
};

export const removeAll = () => async (dispatch) => {

  try {

    const res = await CategoryService.removeAll();
  
    return Promise.resolve(res.data);

  } catch (err) {

    return Promise.reject(err);

  }
};
