// TAKE USERID METHOD
export const TakeUserId = (req) => {
  // Jika user dari JWT valid
  if (req?.user && req.user.id && req.user.id > 0) {
    return req.user.id;
  }

  // Jika tidak, ambil dari params/body
  if (req?.params?.userId) return Number(req.params.userId);
  if (req?.body?.userId) return Number(req.body.userId);
};
