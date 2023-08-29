import { apiInstanseV1 } from "../../api/instance";
import { ListCardType } from "../../types/cfa";

export const getListCfa = async () => {
  const result: ListCardType = (await apiInstanseV1.get("/cfa")).data;

  return result;
};
