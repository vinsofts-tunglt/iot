router.use((err, req, res, next) => {
    // Expected errors always throw Error.
    // Unexpected errors will either throw unexpected stuff or crash the application.
    if (Object.prototype.isPrototypeOf.call(Error.prototype, err)) {
      return res.status(err.status || 500).json({ error: err.message });
    }
    console.error('~~~ Unexpected error exception start ~~~');
    console.error(req);
    console.error(err);
    console.error('~~~ Unexpected error exception end ~~~');
  
    return res.status(500).json({ error: '⁽ƈ ͡ (ुŏ̥̥̥̥םŏ̥̥̥̥) ु' });
  });