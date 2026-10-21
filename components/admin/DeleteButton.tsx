"use client";

type Props = {
  action: (formData: FormData) => void | Promise<void>;
  id: number | string;
  confirmMessage?: string;
  className?: string;
  label?: string;
  iconOnly?: boolean;
};

export default function DeleteButton({
  action,
  id,
  confirmMessage = "Apakah Anda yakin ingin menghapus data ini?",
  className = "btn btn-danger btn-sm",
  label = "Hapus",
  iconOnly = true,
}: Props) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmMessage)) {
          e.preventDefault();
        }
      }}
      className="d-inline"
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className={className} title={label}>
        <i className="bi bi-trash" />
        {!iconOnly && <span className="ms-1">{label}</span>}
      </button>
    </form>
  );
}
