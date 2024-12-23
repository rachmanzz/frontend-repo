import zodValidator from "../middleware/zodValidator";
import {expressHandler, JSONResponseResultType} from "../handlerBaseType";
import {userSchema, UserSchemaType} from "../../schema/user.schema";
import {db} from "../libs/firebase";

const middleware = zodValidator(userSchema.partial());

const updateHandler: expressHandler<
    Partial<UserSchemaType>,
    JSONResponseResultType<null>
> = async (req, res) => {
  try {
    const body = req.body;
    await db.collection("users").doc(req.params.doc_id).update(body);
    return res
      .json({status: "OK"});
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

const handleUpdateUser = [middleware, updateHandler];

export default handleUpdateUser;
