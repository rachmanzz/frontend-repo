import {expressHandler, JSONResponseResultType} from "../handlerBaseType";
import {db} from "../libs/firebase";

const handleDeleteUser: expressHandler<
    unknown,
    JSONResponseResultType<null>
> = async (req, res) => {
  try {
    await db.collection("users")
      .doc(req.params.doc_id).delete();

    return res
      .json({
        status: "OK",
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

export default handleDeleteUser;
