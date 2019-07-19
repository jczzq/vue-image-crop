import mImageCrop from "./m-image-crop";

mImageCrop.install = Vue => {
  if (mImageCrop.installed) return;
  mImageCrop.installed = true;
  Vue.component(mImageCrop.name, mImageCrop);
};

export default mImageCrop;
