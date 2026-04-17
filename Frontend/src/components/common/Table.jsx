import React from "react";

const Table = ({
  columns = [],
  data = [],
  className = "",
  hoverable = true,
  striped = false,
  ...props
}) => {
  return (
    <div
      className={`w-full overflow-x-auto rounded-[2rem] border border-gray-100 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl ${className}`}
    >
      <table className="w-full text-left border-collapse" {...props}>
        <thead>
          <tr className="bg-gray-50/50 dark:bg-slate-800/30">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={`px-8 py-5 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] border-b border-gray-100 dark:border-slate-800/50 ${idx === 0 ? 'rounded-tl-[2rem]' : ''} ${idx === columns.length - 1 ? 'rounded-tr-[2rem]' : ''}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100/50 dark:divide-slate-800/50">
          {data.length > 0 ? (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`
                  transition-all duration-300 group
                  ${hoverable ? "hover:bg-brand-50/30 dark:hover:bg-brand-900/10" : ""}
                  ${striped && rowIdx % 2 !== 0 ? "bg-gray-50/20 dark:bg-slate-800/5" : "bg-transparent"}
                `}
              >
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-8 py-6 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400 ${rowIdx === data.length - 1 && colIdx === 0 ? 'rounded-bl-[2rem]' : ''} ${rowIdx === data.length - 1 && colIdx === columns.length - 1 ? 'rounded-br-[2rem]' : ''}`}
                  >
                    {col.render
                      ? col.render(row[col.accessor], row, rowIdx)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-8 py-20 text-center text-gray-400 font-medium italic rounded-b-[2rem]"
              >
                No data available in this view
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
