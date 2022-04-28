export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp4|mpeg|mkv|avi|webm)$/)) {
      return callback(new Error('Only image and video files are allowed!'), false);
    }
    callback(null, true);
  };