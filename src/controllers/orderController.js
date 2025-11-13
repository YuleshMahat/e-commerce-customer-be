import {
  fetchOrderByFilterQuery,
  newOrder,
  fetchOrderByIdQuery,
} from "../models/orders/orderModel.js";

export const createNewOrderController = async (req, res) => {
  try {
<<<<<<< HEAD
    console.log(444, req.body);
    const { customerId, items, total, currency, paymentIntentId, address } =
      req.body;
=======
    const {
      customerId,
      customerName,
      items,
      total,
      currency,
      paymentIntentId,
      address,
    } = req.body;
>>>>>>> e706efd36a8ce222c9680568fcc1eb952c3edf70

    if (!customerId || !items || !address || items.length === 0) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid order data" });
    }

    const order = await newOrder({
      customerId,
      customerName,
      address,
      items,
      total,
      currency,
      paymentIntentId,
      status: "Order received",
    });

    if (order) {
      return res.status(200).json({
        status: "success",
        message: "Order placed successfully",
        order,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const { id } = req.query;
    const orders = await fetchOrderByFilterQuery({ customerId: id });
    if (orders) {
      return res
        .status(200)
        .json({ status: "success", message: "Orders fetched", orders });
    }
    return res.status(404).json({ status: "error", message: "Not found" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await fetchOrderByIdQuery(id);
    if (order) {
      return res
        .status(200)
        .json({ status: "success", message: "Order fetched" }, order);
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};
