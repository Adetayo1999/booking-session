import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import { UploadIcon } from "../../assets/icon/upload-icon";

export interface Iaccept {
  [key: string]: string[];
}

type Props = {
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
  accept: Iaccept;
  open?: () => void;
  supportFormatText?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  onError?: (err: Error) => void;
};

function Dropzone({
  onDrop,
  accept,
  open,
  supportFormatText,
  name,
  disabled,
  required,
  onError,
}: Props) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop,
    disabled,
    onError,
  });

  return (
    <div className="flex flex-col gap-y-2 mb-1">
      <div className="">
        <label className={`text-xs md:text-sm  font-semibold text-[#344054]`}>
          Means Of Identification
        </label>
      </div>
      <div
        {...getRootProps({
          className: "p-6 pb-12 rounded border border-dashed border-[#CBD5E1] ",
        })}
      >
        <input
          className="input-zone "
          {...getInputProps({ name, required })}
          data-testid={`cy-${name}`}
        />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <div>
              <span className="flex items-center justify-center fill-gray-400 stroke-gray-400">
                <UploadIcon scale={0.7} />
              </span>
              <div className="mt-7 flex flex-col gap-y-2.5">
                <div className="flex items-center justify-center gap-x-1 text-sm ">
                  <p className="text-gray-400">Drag & drop files or </p>
                  <button
                    type="button"
                    onClick={open}
                    className="border-b font-semibold text-gray-800 leading-none"
                  >
                    Browse
                  </button>
                </div>
              </div>
              {supportFormatText ? (
                <p className="mt-2.5 text-xs leading-4.5 text-gray-420">
                  {supportFormatText}
                </p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropzone;
