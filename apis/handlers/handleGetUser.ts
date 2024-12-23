import {expressHandler, JSONResponseResultType} from "../handlerBaseType";
import {UserSchemaType} from "../../schema/user.schema";
import {db} from "../libs/firebase";

const handleGetUser: expressHandler<
    unknown,
    JSONResponseResultType<{ id: string } & UserSchemaType>
> = async (req, res) => {
  try {
    const snap = await db.collection("users")
      .doc(req.params.doc_id).get();

    if (snap.exists) {
      return res
        .json({
          status: "OK",
          data: {id: snap.id, ...snap.data() as UserSchemaType},
        });
    }

    return res.status(404)
      .json({
        status: "NOTFOUND",
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

export default handleGetUser;
