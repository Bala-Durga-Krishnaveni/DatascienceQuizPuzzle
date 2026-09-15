const UNITS = [
  {
    id: 1,
    title: "Python Basics & Programming Concepts",
    desc: "Types, statements, functions, modules, classes & OOP, exceptions.",
    questions: [
      {
        q: "Which of these is an immutable sequence type in Python?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        correct: 2,
        explain: "Tuples cannot be changed after creation — lists, dictionaries and sets are all mutable."
      },
      {
        q: "What does 'dynamic typing' mean in Python?",
        options: ["A variable's type is fixed at declaration and can never change", "A variable is just a name bound to an object, and that binding can point to any type at any time", "Python programs run faster than statically typed languages", "Types must be declared explicitly using a keyword"],
        correct: 1,
        explain: "In Python, names are labels attached to objects — the same name can be rebound to an object of a completely different type."
      },
      {
        q: "Which expression produces the list [0, 1, 4, 9, 16] using a list comprehension?",
        options: ["[x*x in range(5) for x]", "[x*x for x in range(5)]", "for x in range(5): [x*x]", "list(x*x, range(5))"],
        correct: 1,
        explain: "A list comprehension follows the pattern [expression for item in iterable] — here squaring each number from 0 to 4."
      },
      {
        q: "In a function definition, what does *args allow you to do?",
        options: ["Pass a variable number of positional arguments, collected into a tuple", "Force all arguments to be keyword-only", "Declare a private function", "Return multiple values automatically"],
        correct: 0,
        explain: "*args collects any extra positional arguments passed to a function into a tuple inside the function body."
      },
      {
        q: "What is the scope of a variable assigned inside a function, by default?",
        options: ["Global — visible everywhere in the module", "Local to that function, unless declared global or nonlocal", "Shared automatically with all other functions", "Only visible inside if/else blocks"],
        correct: 1,
        explain: "Names assigned inside a function are local to it by default; the global/nonlocal keywords are needed to change an outer-scope name."
      },
      {
        q: "Which statement correctly imports just the 'sqrt' function from the math module?",
        options: ["import math.sqrt", "from math import sqrt", "include sqrt from math", "using math: sqrt"],
        correct: 1,
        explain: "The 'from module import name' form pulls a single attribute directly into the current namespace."
      },
      {
        q: "What is 'operator overloading' in Python classes?",
        options: ["Using too many operators in one expression", "Defining special methods like __add__ so built-in operators work with custom objects", "A syntax error caused by repeated operators", "Overloading a class with too many methods"],
        correct: 1,
        explain: "By implementing special methods such as __add__ or __eq__, a class can define how operators like + or == behave on its instances."
      },
      {
        q: "Which keyword is used to catch an exception in Python?",
        options: ["catch", "except", "rescue", "handle"],
        correct: 1,
        explain: "Python uses try/except blocks; 'except' introduces the handler for a raised exception."
      },
      {
        q: "What does the 'finally' clause in a try/except block guarantee?",
        options: ["It only runs if an exception was raised", "It runs regardless of whether an exception occurred or not", "It replaces the need for 'except'", "It suppresses all exceptions silently"],
        correct: 1,
        explain: "Code in 'finally' always executes — whether the try block succeeded, failed, or an exception propagated — commonly used for cleanup."
      },
      {
        q: "Which of the following correctly opens a file for reading text in Python?",
        options: ["open('data.txt', 'r')", "open('data.txt', 'write')", "file.open('data.txt')", "read('data.txt')"],
        correct: 0,
        explain: "open(filename, mode) with mode 'r' opens a file for reading text; the file object should typically be used with a 'with' block."
      }
    ]
  },
  {
    id: 2,
    title: "GUI Programming & Internet Scripting",
    desc: "Widgets, GUI coding techniques, client/server scripting, persistence.",
    questions: [
      {
        q: "Which module is Python's standard built-in toolkit for building desktop GUIs?",
        options: ["tkinter", "pandas", "requests", "matplotlib"],
        correct: 0,
        explain: "tkinter ships with the standard library and wraps the Tk GUI toolkit for building windows, buttons, and other widgets."
      },
      {
        q: "In GUI programming, a 'widget' refers to:",
        options: ["A background process that never displays anything", "A visible interface element like a button, label, or text box", "A database connection object", "A network socket"],
        correct: 1,
        explain: "Widgets are the visual building blocks of a GUI — buttons, labels, entry fields, menus, and similar components."
      },
      {
        q: "What is the typical purpose of an event loop in GUI programming?",
        options: ["To compile the program before running it", "To continuously wait for and dispatch user events like clicks and key presses", "To manage database transactions", "To format printed output"],
        correct: 1,
        explain: "The event loop (e.g. mainloop() in tkinter) keeps the application running and responds to user interactions as they occur."
      },
      {
        q: "'Customizing widgets' most commonly involves:",
        options: ["Changing a widget's appearance and behaviour, such as its color, font, or callback function", "Deleting the widget entirely", "Rewriting the Python interpreter", "Disabling the event loop"],
        correct: 0,
        explain: "Customization typically means configuring widget options — fonts, colors, sizes, and the functions triggered on events."
      },
      {
        q: "In client-server internet programming, what is the role of the client-side script?",
        options: ["It always stores the master copy of the database", "It runs on the user's machine, often handling the interface and initial requests", "It's identical in purpose to the server-side script", "It compiles the server's source code"],
        correct: 1,
        explain: "Client-side scripts execute on the requesting machine, often managing the interface, before sending or receiving data from a server."
      },
      {
        q: "What does a mail client script like PyMailGUI primarily demonstrate?",
        options: ["Combining GUI programming with network scripting to send/receive email", "Only how to draw shapes in a canvas", "How to compile Python to C", "A database indexing technique"],
        correct: 0,
        explain: "PyMailGUI-style examples combine a graphical front end with network code (e.g. SMTP/POP) to build an email client."
      },
      {
        q: "In Python, which built-in module provides simple persistence by serializing objects to disk?",
        options: ["pickle", "socket", "threading", "tkinter"],
        correct: 0,
        explain: "The pickle module serializes ('pickles') Python objects to a byte stream that can be saved and later restored."
      },
      {
        q: "What is the main goal of Python/C integration?",
        options: ["To let Python call into C code (or vice versa) for performance or reuse of existing libraries", "To convert Python source files into C source files automatically with no code changes", "To remove the need for a Python interpreter entirely", "To disable garbage collection"],
        correct: 0,
        explain: "Python/C integration lets performance-critical or existing C code be called from Python (and Python embedded in C programs), combining the strengths of both."
      },
      {
        q: "Server-side scripting (e.g. a CGI script) primarily executes:",
        options: ["Entirely inside the user's web browser", "On the web server, generating a response sent back to the client", "Only when the user's computer is offline", "Inside the client's GUI event loop"],
        correct: 1,
        explain: "Server-side scripts run on the server, typically processing a request and producing dynamic content sent back to the client."
      },
      {
        q: "Which of the following best describes a 'data structure' consideration in network/tools programming?",
        options: ["Choosing how to organize data (e.g. lists, dicts, queues) so it can be processed and transmitted efficiently", "Selecting the color scheme of a GUI", "Naming a variable using camelCase", "Choosing a font for console output"],
        correct: 0,
        explain: "Picking appropriate data structures affects how efficiently data can be stored, searched, and passed between parts of a networked or GUI application."
      }
    ]
  },
  {
    id: 3,
    title: "Pandas & NumPy",
    desc: "NumPy arrays, element-wise functions, pandas structures, missing data.",
    questions: [
      {
        q: "What is the core data structure provided by NumPy for numerical computing?",
        options: ["DataFrame", "ndarray (n-dimensional array)", "Series", "Dictionary"],
        correct: 1,
        explain: "NumPy's ndarray is a fast, fixed-type, multidimensional array that underlies most numerical computing in Python."
      },
      {
        q: "Why are NumPy's element-wise 'ufuncs' (universal functions) fast compared to plain Python loops?",
        options: ["They use dynamic typing more aggressively", "They operate on whole arrays at once using optimized, vectorized C code", "They always run on the GPU", "They avoid using memory entirely"],
        correct: 1,
        explain: "Vectorized ufuncs apply an operation to every array element in compiled code, avoiding the overhead of Python-level loops."
      },
      {
        q: "In NumPy, what does array.shape return?",
        options: ["The data type of the array's elements", "A tuple giving the size of the array along each dimension", "The total number of elements only", "The memory address of the array"],
        correct: 1,
        explain: "shape is a tuple like (rows, columns) describing the array's dimensions."
      },
      {
        q: "Which pandas object is best described as a one-dimensional labeled array?",
        options: ["DataFrame", "Series", "Index", "Panel"],
        correct: 1,
        explain: "A Series is a one-dimensional array with an associated index of labels; a DataFrame is a 2D collection of such Series."
      },
      {
        q: "Which pandas method quickly gives summary statistics (mean, std, quartiles, etc.) for numeric columns?",
        options: ["df.describe()", "df.info()", "df.head()", "df.columns()"],
        correct: 0,
        explain: "describe() computes descriptive statistics like count, mean, std, min, quartiles, and max for numeric columns."
      },
      {
        q: "Which method checks for missing values in a pandas DataFrame?",
        options: ["df.isnull()", "df.dropna(inplace=True) only", "df.fillna()", "df.duplicated()"],
        correct: 0,
        explain: "isnull() (or isna()) returns a same-shaped boolean DataFrame flagging where values are missing."
      },
      {
        q: "What does df.dropna() do by default?",
        options: ["Fills missing values with zero", "Removes rows that contain at least one missing value", "Removes columns only", "Replaces missing values with the column mean"],
        correct: 1,
        explain: "By default, dropna() removes any row containing at least one NaN; axis and how parameters can change this behaviour."
      },
      {
        q: "What is 'hierarchical indexing' (MultiIndex) in pandas used for?",
        options: ["Sorting a DataFrame alphabetically", "Representing higher-dimensional data using multiple index levels on a single axis", "Encrypting sensitive columns", "Removing duplicate rows automatically"],
        correct: 1,
        explain: "A MultiIndex lets you have multiple levels of row/column labels, effectively representing higher-dimensional data in a 2D structure."
      },
      {
        q: "Which NumPy function would you use to read a plain-text array of numbers from a file?",
        options: ["np.loadtxt()", "np.pickle()", "np.render()", "np.compile()"],
        correct: 0,
        explain: "np.loadtxt() (and np.genfromtxt() for messier data) reads numeric data from a text file into an array."
      },
      {
        q: "In pandas, which attribute or method lets you access rows/columns by integer position rather than label?",
        options: ["df.loc[]", "df.iloc[]", "df.at[]", "df.keys()"],
        correct: 1,
        explain: "iloc[] is purely position-based indexing, while loc[] is label-based."
      }
    ]
  },
  {
    id: 4,
    title: "Data Preprocessing",
    desc: "Loading & storage, wrangling, merging, reshaping, group-by, pivot tables.",
    questions: [
      {
        q: "Which pandas function reads a comma-separated values file into a DataFrame?",
        options: ["pd.read_csv()", "pd.load_csv()", "pd.open_csv()", "pd.import_csv()"],
        correct: 0,
        explain: "pd.read_csv() is the standard way to load delimited text data into a pandas DataFrame."
      },
      {
        q: "Which format is a compact binary file format commonly used to store pandas DataFrames efficiently?",
        options: ["Pickle / Parquet", "TXT", "DOCX", "PPTX"],
        correct: 0,
        explain: "Pickle and Parquet (among others like HDF5) are binary formats well suited to fast, compact storage of structured data, unlike plain text formats."
      },
      {
        q: "Which pandas function is commonly used to combine two DataFrames on a shared key column, similar to a SQL join?",
        options: ["pd.merge()", "pd.split()", "pd.filter()", "pd.describe()"],
        correct: 0,
        explain: "pd.merge() combines DataFrames based on common columns or indices, supporting inner, outer, left, and right joins."
      },
      {
        q: "What does 'reshaping' a DataFrame with pivot/stack/unstack typically accomplish?",
        options: ["Deleting rows permanently", "Rearranging data between long (stacked) and wide (unstacked) layouts", "Changing column data types only", "Sorting rows numerically"],
        correct: 1,
        explain: "Reshaping operations reorganize data between long and wide formats, often moving levels between rows and columns."
      },
      {
        q: "In pandas, what does groupby() primarily let you do?",
        options: ["Rename columns", "Split data into groups by a key, apply a function to each group, and combine the results", "Convert data types", "Encrypt data"],
        correct: 1,
        explain: "groupby() follows the split-apply-combine pattern — grouping rows by a key, computing something per group, then reassembling the results."
      },
      {
        q: "Which method creates a pivot table in pandas, summarizing data by two or more keys?",
        options: ["df.pivot_table()", "df.sort_values()", "df.rename()", "df.astype()"],
        correct: 0,
        explain: "pivot_table() aggregates data into a table with rows and columns defined by chosen keys, similar to Excel's pivot tables."
      },
      {
        q: "What does pd.crosstab() compute?",
        options: ["A frequency table showing counts (or another aggregation) across two or more categorical factors", "The correlation matrix of numeric columns", "A random sample of rows", "The memory usage of a DataFrame"],
        correct: 0,
        explain: "crosstab() builds a cross-tabulation of two or more factors, by default showing frequency counts."
      },
      {
        q: "Which string method family in pandas lets you apply vectorized string operations across a whole Series?",
        options: ["Series.str accessor (e.g. .str.lower(), .str.contains())", "Series.num", "Series.plot", "Series.index"],
        correct: 0,
        explain: "The .str accessor exposes vectorized string methods that apply element-wise across a Series of strings."
      },
      {
        q: "When merging datasets with mismatched key columns, an 'outer join' will:",
        options: ["Keep only rows with matching keys in both datasets", "Keep all rows from both datasets, filling missing matches with NaN", "Keep only rows from the left dataset", "Drop the key column entirely"],
        correct: 1,
        explain: "An outer join keeps every row from both sides, inserting NaN wherever no matching key exists on the other side."
      },
      {
        q: "Which term describes converting a dataset from wide format (one row per subject, many columns) into long format (one row per observation)?",
        options: ["Melting", "Merging", "Filtering", "Indexing"],
        correct: 0,
        explain: "pd.melt() 'melts' a wide DataFrame into a long format, which is often needed for tidy data and certain plotting/aggregation tasks."
      }
    ]
  },
  {
    id: 5,
    title: "Data Visualization",
    desc: "Matplotlib API, plotting with pandas, time series, financial data.",
    questions: [
      {
        q: "Which module is the foundational plotting library most commonly used in Python for 2D charts?",
        options: ["matplotlib.pyplot", "pandas.read_csv", "numpy.array", "os.path"],
        correct: 0,
        explain: "matplotlib.pyplot provides the core plotting API (figures, axes, plot types) that many other tools, including pandas plotting, build on."
      },
      {
        q: "In matplotlib, what do a Figure and an Axes object represent respectively?",
        options: ["Figure is a single data point; Axes is the whole file", "Figure is the overall window/canvas; Axes is an individual plot area within it", "They are two names for the exact same object", "Figure only applies to 3D plots"],
        correct: 1,
        explain: "A Figure is the outer container (like the whole page), while an Axes is one actual plotting area within that figure — a figure can hold multiple axes/subplots."
      },
      {
        q: "Which pandas method lets you quickly plot a Series or DataFrame using matplotlib under the hood?",
        options: ["df.plot()", "df.merge()", "df.groupby()", "df.dropna()"],
        correct: 0,
        explain: "pandas objects have a built-in .plot() method that wraps matplotlib, making quick line, bar, or histogram plots straightforward."
      },
      {
        q: "For plotting a time series in pandas, what type of index is typically most useful?",
        options: ["A DatetimeIndex", "A random integer index", "A MultiIndex of strings only", "No index at all"],
        correct: 0,
        explain: "A DatetimeIndex lets pandas resample, slice by date ranges, and plot time series data naturally along a proper time axis."
      },
      {
        q: "What does 'resampling' a time series (e.g. daily to monthly) typically involve?",
        options: ["Deleting the time series entirely", "Aggregating or interpolating values to change the time frequency of the data", "Reversing the order of rows", "Converting numbers to strings"],
        correct: 1,
        explain: "Resampling changes the frequency of time-indexed data, e.g. converting daily prices into monthly averages via aggregation."
      },
      {
        q: "In matplotlib, which function is used to add axis labels to a plot?",
        options: ["plt.xlabel() and plt.ylabel()", "plt.title_only()", "plt.legend_names()", "plt.axis_text()"],
        correct: 0,
        explain: "plt.xlabel() and plt.ylabel() set the text labels for the horizontal and vertical axes respectively."
      },
      {
        q: "Which plot type is most appropriate for visualizing a stock's price movement over time?",
        options: ["Pie chart", "Line plot (or candlestick chart)", "Scatter plot of unrelated categories", "Bar chart of a single value"],
        correct: 1,
        explain: "Line plots (or specialized candlestick charts) clearly show how a continuous value like price changes over time."
      },
      {
        q: "What is the purpose of plt.legend() in a matplotlib chart?",
        options: ["To resize the figure", "To display labels identifying each plotted series or category", "To save the figure to disk", "To change the color palette globally"],
        correct: 1,
        explain: "legend() draws a key mapping each line/marker style to its label, helping readers interpret multi-series charts."
      },
      {
        q: "When comparing economic or financial data across differently-scaled series (e.g. GDP vs. inflation rate), what's a common visualization technique?",
        options: ["Plotting both on a single axis with the same scale, regardless of units", "Using a secondary y-axis (twin axis) so each series keeps its own meaningful scale", "Always converting both series to percentages of nothing", "Removing one of the series entirely"],
        correct: 1,
        explain: "A secondary y-axis lets two series with very different scales or units be plotted together while each remains readable."
      },
      {
        q: "Which matplotlib function saves the current figure to an image file (e.g. PNG)?",
        options: ["plt.savefig('chart.png')", "plt.exportimage()", "plt.dump('chart.png')", "plt.write_png()"],
        correct: 0,
        explain: "plt.savefig() writes the current figure to disk in the format implied by the file extension, such as PNG, PDF, or SVG."
      }
    ]
  }
];

function toRoman(n){
  return ['I','II','III','IV','V'][n-1] || n;
}
