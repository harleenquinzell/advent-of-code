(ns advent-of-code.day-one-test
  (:require [advent-of-code.day-one :refer :all]
            [clojure.test :refer :all]))

(def input "./src/advent_of_code/input/day_one_input.txt")
(def data "./src/advent_of_code/input/day_one_data")
(def second-input "./src/advent_of_code/input/day_one_test.txt")
(def third-input "./src/advent_of_code/input/day_one_test2.txt")

(deftest day-one-test
  (testing "First Solution"
    (is (= 538 (solve-first-problem input)))
    (is (= 416 (solve-first-problem data))))

  (testing "Second solution"
    (is (= 0 (solve-second-problem second-input)))
    (is (= 10 (solve-second-problem third-input)))
    (is (= 77271 (solve-second-problem input)))))
