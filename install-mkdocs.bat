@echo off
echo Setting up MkDocs for VP-KB-v1...

:: Create virtual environment
python -m venv .venv
call .venv\Scripts\activate

:: Upgrade pip
python -m pip install --upgrade pip

:: Install MkDocs and plugins
pip install mkdocs-material mkdocs-minify-plugin mkdocs-awesome-pages-plugin mkdocs-glightbox

echo Done. To build locally:
echo --------------------------------------
echo   .venv\Scripts\activate
echo   mkdocs serve
echo --------------------------------------
