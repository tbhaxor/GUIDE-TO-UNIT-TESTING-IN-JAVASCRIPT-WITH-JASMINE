for x in {1..5}
do
    git checkout -b chapter-$x
    rm LICENSE
    git add .
    git commit -m "removed the licence"
    git checkout master
done