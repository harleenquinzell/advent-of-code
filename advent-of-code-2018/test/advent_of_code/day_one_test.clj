(ns advent-of-code.day-one-test
  (:require [advent-of-code.day-one :refer :all]
            [clojure.test :as t]))

  (def input "./test/advent_of_code/input/day_one_input")
  (def data "./test/advent_of_code/input/day_one_data")
  (def second-input "./test/advent_of_code/input/day_one_test")
  (def third-input "./test/advent_of_code/input/day_one_test2")

(t/deftest day-one-test
  (t/testing "First Solution"
    (t/is (= 538 (solve-first-problem input)))
    (t/is (= 416 (solve-first-problem data))))

  (t/testing "Second solution"
    (t/is (= 0 (solve-second-problem second-input)))
    (t/is (= 10 (solve-second-problem third-input)))
    (t/is (= 77271 (solve-second-problem input)))))
