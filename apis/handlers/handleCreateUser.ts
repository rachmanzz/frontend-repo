import zodValidator from "../middleware/zodValidator";
import {expressHandler, JSONResponseResultType} from "../handlerBaseType";
import {userSchema, UserSchemaType} from "../../schema/user.schema";
import {db} from "../libs/firebase";

const middleware = zodValidator(userSchema);

const createHandler: expressHandler<
  UserSchemaType,
  JSONResponseResultType<{ id: string } & UserSchemaType>
> = async (req, res) => {
  try {
    const body = req.body;
    const addSnap = await db.collection("users").add(body);
    const snap = await addSnap.get();
    return res.status(201)
      .json({status: "CREATED",
        data: {
          id: snap.id,
          ...snap.data() as UserSchemaType,
        },
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

const handleCreateUser = [middleware, createHandler];

export default handleCreateUser;
