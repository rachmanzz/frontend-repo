import {expressHandler, JSONResponseResultType} from "../handlerBaseType";
import {UserSchemaType} from "../../schema/user.schema";
import {db} from "../libs/firebase";

type UserResultType = { id: string } & UserSchemaType;

const handleGetAllUser: expressHandler<
    unknown,
    JSONResponseResultType<UserResultType[]>
> = async (_, res) => {
  try {
    const snap = await db.collection("users").get();
    const data: UserResultType[] = [];
    snap.forEach((doc) => {
      data.push({id: doc.id, ...doc.data() as UserSchemaType});
    });
    return res
      .json({
        status: "OK",
        data: data,
      });
  } catch (error) {
    // we may need handler firestore error, but in this case I pass them
    if (error instanceof Error) {
      return res.status(500)
        .json({status: "ERROR", message: error.message});
    }

    return res.status(500)
      .json({status: "ERROR", message: "unknown error message"});
  }
};

export default handleGetAllUser;
